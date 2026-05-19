namespace KwaValidator.Tests;
public class BiValidatorTests
{
    private readonly BiValidator _validator;

    public BiValidatorTests()
    {
        _validator = new BiValidator();
    }

    [Theory]
    [InlineData("123456789LA001")] // Luanda
    [InlineData("987654321BG099")] // Benguela
    [InlineData("000123456HU123")] // Huambo
    public void Validate_ShouldReturnSuccess_WhenBiIsValid(string validBi)
    {
        // Act
        var result = _validator.Validate(validBi);

        // Assert
        Assert.True(result.IsValid);
        Assert.Null(result.ErrorCode);
        Assert.Null(result.ErrorMessage);
        Assert.NotNull(result.Province);
        Assert.False(string.IsNullOrEmpty(result.Province.Name));
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    public void Validate_ShouldReturnFailure_WhenBiIsEmpty(string? emptyBi)
    {
        // Act
        var result = _validator.Validate(emptyBi!);

        // Assert
        Assert.False(result.IsValid);
        Assert.Equal(BiValidationError.Empty, result.ErrorCode);
        Assert.Equal("BI is required", result.ErrorMessage);
        Assert.Null(result.Province);
    }

    [Theory]
    [InlineData("123456789LA00")]  // 13 caracteres
    [InlineData("123456789LA0012")] // 15 caracteres
    public void Validate_ShouldReturnFailure_WhenBiHasInvalidLength(string invalidLengthBi)
    {
        // Act
        var result = _validator.Validate(invalidLengthBi);

        // Assert
        Assert.False(result.IsValid);
        Assert.Equal(BiValidationError.InvalidLength, result.ErrorCode);
        Assert.Equal("BI must have 14 characters", result.ErrorMessage);
        Assert.Null(result.Province);
    }

    [Theory]
    [InlineData("12345678ALA001")] // Letra no meio dos números
    [InlineData("123456789L1001")] // Número no meio das letras
    [InlineData("ABC456789LA001")] // Letras no início
    public void Validate_ShouldReturnFailure_WhenBiHasInvalidFormat(string invalidFormatBi)
    {
        // Act
        var result = _validator.Validate(invalidFormatBi);

        // Assert
        Assert.False(result.IsValid);
        Assert.Equal(BiValidationError.InvalidFormat, result.ErrorCode);
        Assert.Equal("BI format is invalid", result.ErrorMessage);
        Assert.Null(result.Province);
    }

    [Fact]
    public void Validate_ShouldReturnFailure_WhenProvinceCodeDoesNotExist()
    {
        // Arrange
        var invalidProvinceBi = "123456789XX001"; // XX não existe

        // Act
        var result = _validator.Validate(invalidProvinceBi);

        // Assert
        Assert.False(result.IsValid);
        Assert.Equal(BiValidationError.InvalidProvince, result.ErrorCode);
        Assert.Equal("Invalid province code", result.ErrorMessage);
        Assert.Null(result.Province);
    }
}
