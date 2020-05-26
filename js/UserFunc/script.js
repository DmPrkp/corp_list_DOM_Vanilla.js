let User = [
    {
        img: "m1.jpg",
        name: "Иван",
        lastName: "Иванов",
        bDate: new Date(1976, 23, 1),        
        post: "сталевар",
        outS: false,
        addres: "г. Санкт-Петербург Невсий пр. д. 106 кв.8",
    }, {
        img: "m2.jpg",
        name: "Петр",
        lastName: "Петров",
        bDate: new Date(1986, 11, 1),        
        post: "охранник",
        outS: false,
        addres: "г. Санкт-Петербург Литейный пр. д. 13 кв.88",
    }, {
        img: "m3.jpg",
        name: "Влентин",
        lastName: "Юмашев",
        bDate: new Date(1996, 1, 18),        
        post: "технический писатель",
        outS: true,
        addres: "г. Тула ул. Комсомола д. 138 кв.1",
    }, {
        img: "m4.jpg",
        name: "Борис",
        lastName: "Ельцон",
        bDate: new Date(1962, 12, 13),        
        post: "уборщик",
        outS: false,
        addres: "г. Санкт-Петербург ул. Красных комиссаров д. 18 кв.1/у",
    }, {
        img: "m8.jpg",
        name: "Людочка",
        lastName: "",
        bDate: new Date(1976, 1, 18),        
        post: "бухгалтер",
        outS: false,
        addres: "г. Санкт-Петербург Невский проспект д. 1 кв.6",
    }, {
        img: "m5.jpg",
        name: "Арсений",
        lastName: "Геворкян",
        bDate: new Date(1993, 1, 18),        
        post: "менеджер по логистике",
        outS: true,
        addres: "г. Геленджик ул. Приморская д. 3",
    }
]
let tbMain = document.getElementById("tBodyMain");




function renderUser(arr) {
    for (i = 0; i < arr.length; i++) {
        let trCreate = document.createElement('tr');
        trCreate.classList.add("table-active");
        tbMain.appendChild(trCreate);

    //create IMG(Photo);
        let thImg = document.createElement('th');
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');

        img.setAttribute("src", "img/" + arr[i].img);

        imgDiv.classList.add("imgFrame")
        img.style.width = "auto"
        img.style.height = "100%"
        imgDiv.style.height = "70px"

        imgDiv.appendChild(img);
        trCreate.appendChild(thImg);
        thImg.appendChild(imgDiv);

    //create Name;
        let tdName = document.createElement('td');
        let pName = document.createElement('p');
        let divName = document.createElement('div');

        pName.innerText = arr[i].name;

        tdName.appendChild(divName);
        divName.appendChild(pName);
        trCreate.appendChild(tdName);

    //create last-name
        lastNameFunc(arr)
        function lastNameFunc(prop) {
            let tdLastN = document.createElement('td');
            let pLastN = document.createElement('p');
            let divLastN = document.createElement('div');

            pLastN.innerText = prop[i].lastName;

            tdLastN.appendChild(divLastN);
            divLastN.appendChild(pLastN);
            trCreate.appendChild(tdLastN);
        }

    //create birthday date
        birthdayFunc(arr)
        function birthdayFunc(prop) {
            let tdLastN = document.createElement('td');
            let pLastN = document.createElement('p');
            let divLastN = document.createElement('div');

            pLastN.innerText = prop[i].bDate.toLocaleDateString();

            tdLastN.appendChild(divLastN);
            divLastN.appendChild(pLastN);
            trCreate.appendChild(tdLastN);
        }

    //create age
        ageyearFunc(arr)
        function ageyearFunc(prop) {
            let tdLastN = document.createElement('td');
            let pLastN = document.createElement('p');
            let divLastN = document.createElement('div');
            
            let date = new Date();
            pLastN.innerText = Math.floor((date - prop[i].bDate)/(1000 * 60 * 60 * 24 * 365));

            tdLastN.appendChild(divLastN);
            divLastN.appendChild(pLastN);
            trCreate.appendChild(tdLastN);
        }

    //create post
        postFunc(arr)
        function postFunc(prop) {
            let tdLastN = document.createElement('td');
            let pLastN = document.createElement('p');
            let divLastN = document.createElement('div');

            pLastN.innerText = prop[i].post;

            trCreate.appendChild(tdLastN);
            tdLastN.appendChild(divLastN);
            divLastN.appendChild(pLastN);            
        }

    //create outS   

        outSFunc(arr)
        function outSFunc(prop) {
            let tdLastN = document.createElement('td');
            let inputCheck = document.createElement('input');
            let divLastN = document.createElement('div');
            
            let type = document.createAttribute("type");
            type.value = "checkbox";
            inputCheck.attributes.setNamedItem(type);

            let checked = document.createAttribute("checked");

            (prop[i].outS == true) ? inputCheck.attributes.setNamedItem(checked) : false;

            divLastN.classList.add("form-check-tb");
            inputCheck.classList.add("form-check-input", "mt-2", "ml-2",);           

            trCreate.appendChild(tdLastN);
            tdLastN.appendChild(divLastN);
            divLastN.appendChild(inputCheck);            
        }
        

    //create adress
        adressFunc(arr)
        function adressFunc(prop) {
            let tdLastN = document.createElement('td');
            let pLastN = document.createElement('p');
            let divLastN = document.createElement('div');

            pLastN.innerText = prop[i].addres;

            tdLastN.appendChild(divLastN);
            divLastN.appendChild(pLastN);
            trCreate.appendChild(tdLastN);
        }
    }
}

renderUser(User)

