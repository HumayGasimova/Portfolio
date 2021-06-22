export type CountdownItemProps = {
    textColor: string,
    data: CountdownItemDataObj,
    numberColor: string,
    page: string,
    setCurrentDateAndNextMonth: (countdownKey: string, currentDate: DateObj, nextMonth: NextMonthObj) => {countdownKey: string, currentDate: DateObj, nextMonth: NextMonthObj},
    countdownValue: (countdownKey: string, opt: string, val: number) => {countdownKey: string, opt: string, val: number}
}

type CountdownItemDataObj = {
    countdownValue: Array<CountdownValueItem>,
    endDate: DateObj,
    id: number,
    key: string,
    nextMonth: NextMonthObj,
    startDate: DateObj
}

type CountdownValueItem = {
    id: number,
    key: string,
    name: string,
    val: number
}

type DateObj = {
    day: string | number,
    month: string | number,
    year: string | number
}

type NextMonthObj = {
    leapYear: boolean,
    month: string
}
