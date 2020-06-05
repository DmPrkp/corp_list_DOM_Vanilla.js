
;(function () {
    window.myUtils = {
        sortName: function (prop) {
            prop.sort(function (a, b) {                
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
            myUtils.renderUser(prop);
        },
        sortAge: function (prop) {
            prop.sort(function (a, b) {
                return b.bDate - a.bDate;
            });
            myUtils.renderUser(prop);
        },
        renderUser: function (arr) {
            tbMain.innerHTML = "";
            for (let i = 0; i < arr.length; i++) {
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

                trCreate.appendChild(thImg);
                thImg.appendChild(imgDiv);
                imgDiv.appendChild(img);

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
                    pLastN.innerText = Math.floor((date - prop[i].bDate) / (1000 * 60 * 60 * 24 * 365));

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
                    inputCheck.classList.add("form-check-input", "mt-2", "ml-2");

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
        },        
    };
}());