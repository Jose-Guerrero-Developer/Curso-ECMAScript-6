let createPlayer = (nickname, { hp, sp, _class} = { hp: 100, sp: 50, _class: 'Mago' }) => {
    return `${ nickname } ${ hp  } ${ sp } ${ _class }`
}

console.log(createPlayer(
    'Strider'
))

console.log(createPlayer(
    'Strider',
    {
        hp: 150,
        sp: 75,
        _class: 'Warrior'
    }
))

/**
Strider 100 50 Mago
Strider 150 75 Warrior
 */
