import { IBiValidator } from '../abstractions/i-bi-validator.js';
import { BiValidationResult } from '../models/bi-validation-result.js';
import { BiValidationError } from '../enums/bi-validation-error.js';
import { Province } from '../models/province.js';

export class BiValidator implements IBiValidator {
  // Regex atualizada para suportar as 2 letras das províncias normais E as 3 letras de KNo/KSu
  private static readonly BiRegex = /^\d{9}([A-Z]{2}\d{3}|K[A-Za-z]{2}\d{2})$/;

  private static readonly Provinces: Record<string, Province> = {
    'BL': new Province('BL', 'Bengo'),
    'BG': new Province('BG', 'Benguela'),
    'BI': new Province('BI', 'Bié'),
    'CB': new Province('CB', 'Cabinda'),
    'CC': new Province('CC', 'Cuando Cubango'),
    'CN': new Province('CN', 'Cunene'),
    'HU': new Province('HU', 'Huambo'),
    'HL': new Province('HL', 'Huíla'),
    'LA': new Province('LA', 'Luanda'),
    'LN': new Province('LN', 'Lunda Norte'), // Corrigido de LD para LN (padrão oficial)
    'LS': new Province('LS', 'Lunda Sul'),
    'ML': new Province('ML', 'Malanje'),
    'MO': new Province('MO', 'Moxico'),
    'NA': new Province('NA', 'Namibe'),
    'UI': new Province('UI', 'Uíge'),
    'ZA': new Province('ZA', 'Zaire'),
    'KNO': new Province('KNO', 'Cuanza Norte'),
    'KSU': new Province('KSU', 'Cuanza Sul')
  };

  public validate(bi: string): BiValidationResult {
    if (!bi || bi.trim() === '') {
      return BiValidationResult.failure(BiValidationError.Empty, 'BI is required');
    }

    if (bi.length !== 14) {
      return BiValidationResult.failure(BiValidationError.InvalidLength, 'BI must have 14 characters');
    }

    const upperBi = bi.toUpperCase();

    if (!BiValidator.BiRegex.test(upperBi)) {
      return BiValidationResult.failure(BiValidationError.InvalidFormat, 'BI format is invalid');
    }

    // Captura o código da província de forma dinâmica (se começa com K pega 3 letras, senão 2)
    const provinceCode = upperBi.startsWith('K', 9) 
      ? upperBi.substring(9, 12) 
      : upperBi.substring(9, 11);

    const province = BiValidator.Provinces[provinceCode];

    if (!province) {
      return BiValidationResult.failure(BiValidationError.InvalidProvince, 'Invalid province code');
    }

    return BiValidationResult.success(province);
  }
}
