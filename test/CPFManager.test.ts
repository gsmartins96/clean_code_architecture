import CPFManager from "../src/CPFManager"

test.each([
    "06076908106",
    "684.053.160-00",
    "746.971.314-01"
])("Deve testar um CPF válido, %s", function(cpf: string) {
    const cpfValidator = new CPFManager();

    expect(cpfValidator.validate(cpf)).toBeTruthy();
})

test.each([
    "06076908101",
    ""
])("Deve testar um CPF invalido &s", function(cpf: string) {
    const cpfValidator = new CPFManager();
    
    expect(cpfValidator.validate(cpf)).toBeFalsy();
})

test.each([
    "111.111.111.11",
    "222.222.222-22"
])("Deve testar CPF com digitos iguais &s", function(cpf: string) {
    const cpfValidator = new CPFManager();
    
    expect(cpfValidator.validate(cpf)).toBeFalsy();
})
