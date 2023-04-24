//https://randomuser.me/api/
const data = {
    "results":[
        {
            "gender":"female",
            "name":{
                "title":"Miss",
                "first":"آیلین",
                "last":"احمدی"
            },
            "location":{
                "street":{
                    "number":8383,
                    "name":"ستارخان"
                },
                "city":"تبریز",
                "state":"کرمان",
                "country":"Iran",
                "postcode":54432,
                "coordinates":{
                    "latitude":"14.9037",
                    "longitude":"27.7176"
                },
                "timezone":{
                    "offset":"-11:00",
                    "description":"Midway Island, Samoa"
                }
            },
            "email":"aylyn.hmdy@example.com",
            "login":{
                "uuid":"2010d55d-7b58-4e57-b19a-b275aa3ee61c",
                "username":"redpanda221",
                "password":"midway",
                "salt":"SuG4xDSe",
                "md5":"edfd328637875b18684fe80d51564cab",
                "sha1":"d20bf0a3cc08304780db555e633d9212bcde6c47",
                "sha256":"0a8539106cfd86ae3c65f5643a258f7682e7bbd501dc42fb5753f24f2c8de0b8"
            },
            "dob":{
                "date":"1971-07-26T15:12:51.914Z",
                "age":51
            },
            "registered":{
                "date":"2009-07-05T22:18:11.209Z",
                "age":13
            },
            "phone":"062-89408423",
            "cell":"0965-142-1314",
            "id":{
                "name":"",
                "value":null
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/women/63.jpg",
                "medium":"https://randomuser.me/api/portraits/med/women/63.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/women/63.jpg"
            },
            "nat":"IR"
        }
    ],
    "info":{
        "seed":"de39066807256a88",
        "results":1,
        "page":1,
        "version":"1.4"
    }
};
const user = data.results[0];

const body = document.querySelector('body');
const p = document.createElement('p');
const img = document.createElement('img');
img.setAttribute('src', user.picture.large);
const header = document.createElement('H1');
header.textContent = user.name.title;
p.textContent = `Возраст ${user.dob.age}, email ${user.email}, Телефон ${user.phone}`;
const section = document.createElement('section');

section.appendChild(img);
section.appendChild(header);
section.appendChild(p);
body.appendChild(section);