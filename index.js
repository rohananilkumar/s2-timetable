currentDate = new Date();



periodTimings = {
    1:[[8,30],[9,10]],
    2:[[9,20],[10,10]],
    3:[[10,10],[10,50]],
    4:[[11,00],[11,40]],
    5:[[11,50],[12,30]],
    6:[[12,40],[13,20]],
    7:[[13,30],[14,10]],
}

function getPeriodNumber(){
    for(let period in periodTimings){
        startDate = new Date(currentDate.getTime());
        startDate.setHours(periodTimings[period][0][0]);
        startDate.setMinutes(periodTimings[period][0][1]);
        

        endDate = new Date(currentDate.getTime());
        endDate.setHours(periodTimings[period][1][0]);
        endDate.setMinutes(periodTimings[period][1][1]);

        if(startDate < currentDate && endDate > currentDate){
            console.log(period);
            return period;
        }
        
    }
}

function periodSelector(row, column){
    const _row = document.querySelector('.time-table').rows[row];
    periods=[];
    
    for(let i=0; col=_row.cells[i]; i++){
        if(col.colSpan==2){
            periods.push(col);
            periods.push(col);
        }
        else{
            periods.push(col);
        }
    }
    return periods;
}

setTimeout(function(){
    document.querySelector('.period-data').style.backgroundColor = 'wheat';
    const currentCell = periodSelector(currentDate.getDay())[getPeriodNumber()];
    currentCell.style.backgroundColor='#a9ffa6';
    console.log(new Date);
}, 1000);

setTimeout(function(){console.log('lol')},100)




document.querySelector('#answer-no').addEventListener('mouseover',function(){
    if(document.querySelector('.answers').style.flexDirection=='row-reverse'){
        document.querySelector('.answers').style.flexDirection='row';
    }
    else{
        document.querySelector('.answers').style.flexDirection='row-reverse';

    }
});


document.querySelector('#answer-yes').addEventListener('click',()=>{
    alert('He kind of already knew that but thanks for confirming :)');
})

