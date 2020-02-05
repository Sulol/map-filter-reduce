{
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];


    const maxPurchases = purchases
    .map(o => ({
        data: o.date, 
        count: o.values.length
    }))
    .reduce((acc, curr) => acc.count > curr.count ? acc : curr);
    
    const result = maxPurchases.data;
    console.log(result);
 
}
{
    
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];

    const maxPurSumm = purchases
    .map((o => ({
        date: o.date,
        amount: o.values.reduce((acc, curr) => acc + curr.amount, 0)
    })))
    .reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);
    
    const result = maxPurSumm.date;
    console.log(result);
}
{
   
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];

    const dearPur = purchases
    .map(o => o.values)
    .flat()
    .reduce((acc, curr) => acc.amount > curr.amount ? acc : curr)

    console.log(dearPur)
}
{
   
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];
 
    const findMaxCategory = purchases
    .map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const comparisonCtategory = acc.find(o => o.category === curr.category)
        if (comparisonCtategory === undefined){
            acc.push({
                category: curr.category,
                amount: curr.amount
            });
        } else {
            comparisonCtategory.amount += curr.amount
        }
    return acc;
    console.log(findMaxCategory);
    }, []).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr)
    console.log(findMaxCategory);
}
{
    
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];


    const meanAmountInDay = purchases.map(o => o.values)
    .flat()
    .map((o, index, array) => o.amount / array.length
    ).reduce((acc, curr) => acc + curr)

    console.log(meanAmountInDay);

}