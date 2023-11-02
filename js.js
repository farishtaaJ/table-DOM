function createTable ()
{
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let trHead = document.createElement("tr")

    let th1 = document.createElement("th")
    th1.textContent = "Ф.И.О"

    let th2 = document.createElement("th")
    th2.textContent = "НОМЕР ТЕЛЕФОНА"

    let th3 = document.createElement("th")
    th3.textContent = "СТАТУС"

    trHead.appendChild(th1)
    trHead.appendChild(th2)
    trHead.appendChild(th3)
    thead.appendChild(trHead)
    table.appendChild(thead)

    let tbody = document.createElement("tbody")

    let data = 
    [
        { name: "1. Khojaev Shohdidor", phone: "903104666", status: "Active" },
        { name: "2. Tohira Furmol", phone: "915327266", status: "Active" },
        { name: "3. Umedjon Sadriddinov", phone: "930800506", status: "Active" },
        { name: "4. Mukhammadullo Nastulloev", phone: "927305451", status: "Active" },
        { name: "5. Surush Kalandarsho", phone: "985749140", status: "Active" },
        { name: "6. Abdurahmon Rahimov", phone: "985870074", status: "Active" },
        { name: "7. Jamshedzoda Farishtamoh", phone: "905130022", status: "Active" }
    ];

    data.forEach((item) => 
    {
        let row = document.createElement("tr")

        let cell1 = document.createElement("td")
        cell1.textContent = item.name; // by name 

        let cell2 = document.createElement("td")
        cell2.textContent = item.phone // by phone

        let div = document.createElement("div")
        let cell3 = document.createElement("td")
        cell3.textContent = item.status // by status
        
        div.appendChild(cell3)
        row.appendChild(cell1)
        row.appendChild(cell2)
        row.appendChild(div)
        tbody.appendChild(row)
    });

    table.appendChild(tbody)
    document.body.appendChild(table)   

}
createTable()