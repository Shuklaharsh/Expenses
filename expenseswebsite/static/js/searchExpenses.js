const searchField = document.querySelector('#searchField') 
const tableOutput = document.querySelector('.table-output')
const appTable = document.querySelector('.app-table')
const paginationContainer = document.querySelector('.pagination-container')
const tbody = document.querySelector('.table-body')
const noResult = document.querySelector('.no-result')


tableOutput.style.display = 'none';
noResult.style.display = 'none';
searchField.addEventListener('keyup',(e)=>{
    const searchValue = e.target.value;
    paginationContainer.style.display = 'none';
    if(searchValue.trim().length>0){
        tbody.innerHTML='';
        fetch('search-expense',{
            body : JSON.stringify({searchText:searchValue}),
            method : 'POST',
        })
        .then((res)=>res.json())
        .then((data)=>{  
            console.log('data',data);
            appTable.style.display = 'none';
            tableOutput.style.display = 'block';
            if(data.length === 0){
                noResult.style.display = 'block';
                tableOutput.style.display = 'none';
            }
            else{
                noResult.style.display = 'none';
                data.forEach((item)=>{
                    tbody.innerHTML+=
                    `<tr>
                    <td>${item.amount}</td>
                    <td>${item.category}</td>
                    <td>${item.description}</td>
                    <td>${item.date}</td> 
                    </tr>
                    `
                })     
            }
            
            
        })
    }
    else{
        tableOutput.style.display = 'none';
        appTable.style.display = 'block';
        paginationContainer.style.display = 'block';
    }
})