let person = {
    name: 'Susana Alexandra López Medina',
    email: 'susana@outlook.es',
    facebook: 'susana 18',
    google: 'susna 2018',
    premium: true,
    twitter: 'susana_lopez'
}

let { name, email, google, facebook, premium, twitter:accountTwi = 'susi' } = person

console.log(name, email, facebook, google, premium, accountTwi)
