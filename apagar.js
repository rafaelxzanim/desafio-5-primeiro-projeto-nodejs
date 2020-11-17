	let transactions = [];
		
	transactions = [
    {
      id: "uuid",
      title: "Salário",
      value: 4000,
      type: "income"
    },
    {
      id: "uuid",
      title: "Freela",
      value: 2000,
      type: "income"
    },
    {
      id: "uuid",
      title: "Pagamento da fatura",
      value: 4000,
      type: "outcome"
    },
    {
      id: "uuid",
      title: "Cadeira Gamer",
      value: 1200,
      type: "outcome"
    }
  ]
   
  //console.log(transactions);
  
  const reducer  = (accumulator, currentValue) => accumulator + currentValue;
    
  const result = transactions.reduce( (param)=>{
      console.log(param.value);
  } );

  //console.log(result);