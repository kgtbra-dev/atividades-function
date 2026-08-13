function CalcularSalario(salario, bonus) {

    let valorBonus = salario * bonus / 100;
    return SalarioFinal = salario + valorBonus;
    return SalarioFinal;
}

 let salario = CalcularSalario(3000, 10);
 console.log(`Salário final : R${salario}`);