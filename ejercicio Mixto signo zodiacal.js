
const Programmer = {
    name: 'Maykel',
    age: 39,
    sex: 'male',
    married: true,
    countryOfResidence: 'Cuba',
    id: '81022001025',
    homeProperty: false,
    workStatus: false,
    moneyAmount: 200,
    coinType: 'CUP',
    //setter name
    setName: setName = (newName) => Programmer.name = newName,
    //getter name
    getName: getName = () => {
        return `Programmer's name is ${Programmer.name}`
    },
    //setter age
    setAge: setAge = (newAge) => Programmer.age = newAge,
    //getter age
    getAge: getAge = () => { return `${Programmer.name} is ${Programmer.age} years old` },
    //setter sex
    setSex: setSex = (newSex) => Programmer.sex = newSex,
    //getter sex
    getSex: getSex = () => { return `${Programmer.name} is ${Programmer.sex}` },
    //setter married status
    setMarried: setMarried = (newMarriedStatus) => Programmer.married = newMarriedStatus,
    //getter married status
    getMarried: getMarried = () => {
        if (Programmer.married === true) {
            return `${Programmer.name} is married.`
        } else {
            return `${Programmer.name} is single.`
        }
    },
    //setter Home
    setHomeProperty: setHomeProperty = (newGetHomeProperty) => Programmer.homeProperty = newGetHomeProperty,
    //getter Home
    getHomeProperty: getHomeProperty = () => {
        if (Programmer.homeProperty === false) {
            return `${Programmer.name} has no place of his own`
        } else {
            return `${Programmer.name} has a home of his own`
        }
    },
    //setter workstatus
    setWorkStatus: setWorkStatus = (newWorkStatus) => Programmer.workStatus = newWorkStatus,
    //getter workstatus
    getWorkStatus: getWorkStatus = () => {
        if (Programmer.workStatus === false) {
            return `${Programmer.name} has no job yet`
        } else {
            return `${Programmer.name} is working and earning`
        }
    },
    //setter moneyAmount
    setMoneyAmount: setMoneyAmount = (newAmount) => Programmer.moneyAmount = newAmount,
    //getter moneyAmount
    getMoneyAmount: getMoneyAmount = () => {
        return ` ${Programmer.moneyAmount} ${Programmer.coinType} is better than 0 ${Programmer.coinType} `
    },
    //getter zodiacal signature
    //perdoname por este sacrilegio diosa de la programacion!!
    birthDate: birthDay = () => {
        return new Date(+(Programmer.id[0] + Programmer.id[1]),
            +(Programmer.id[2] + Programmer.id[3]) - 1,
            +(Programmer.id[4] + Programmer.id[5]))
    },
    sign: sign = () => {
        for (let i of SIGN) {

            if (i.mi == Programmer.birthDate().getMonth()) {
                if (i.fi < Programmer.birthDate().getDate()) {
                    return `${Programmer.name} es ${i.sign}`

                }
            } else if (i.mf == Programmer.birthDate().getMonth()) {
                if (i.ff > Programmer.birthDate().getDate()) {
                    return `${Programmer.name} es ${i.sign}`
                }
            }
        }

    }
}

const Zodiac = {
    Acuario: {
        fi: 21,
        ff: 18,
        mi: 00,
        mf: 01,
        sign: 'Acuario'
    },
    Piscis: {
        fi: 19,
        ff: 20,
        mi: 01,
        mf: 02,
        sign: 'Piscis'
    },
    Aries: {
        fi: 21,
        ff: 20,
        mi: 02,
        mf: 03,
        sign: 'Aries'
    },
    Taurus: {
        fi: 21,
        ff: 20,
        mi: 03,
        mf: 04,
        sign: 'Taurus'
    },
    Gemini: {
        fi: 21,
        ff: 21,
        mi: 04,
        mf: 05,
        sign: 'Gemini'
    },
    Cancer: {
        fi: 22,
        ff: 22,
        mi: 05,
        mf: 06,
        sign: 'Cancer'
    },
    Leo: {
        fi: 23,
        ff: 22,
        mi: 06,
        mf: 07,
        sign: 'Leo'
    },
    Virgo: {
        fi: 23,
        ff: 22,
        mi: 07,
        mf: 08,
        sign: 'Virgo'
    },
    Libra: {
        fi: 23,
        ff: 22,
        mi: 08,
        mf: 09,
        sign: 'Libra'
    },
    Escorpio: {
        fi: 23,
        ff: 22,
        mi: 09,
        mf: 10,
        sign: 'Escorpio'
    },
    Sagittarius: {
        fi: 23,
        ff: 21,
        mi: 10,
        mf: 11,
        sign: 'Sagittarius'
    },
    Capricornus: {
        fi: 22,
        ff: 20,
        mi: 11,
        mf: 00,
        sign: 'Capricornus'
    }
}

const SIGN = [
    Zodiac.Acuario, Zodiac.Piscis, Zodiac.Aries, Zodiac.Taurus, Zodiac.Gemini,
    Zodiac.Leo, Zodiac.Cancer, Zodiac.Libra, Zodiac.Escorpio, Zodiac.Sagittarius,
    Zodiac.Capricornus
]

console.log(Programmer.sign())
