export type PricingTablesCardItemProps = {
    currentPagePathName: string,
    page: string,
    data: PricingTablesCardDataObj,
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

type PricingTablesCardDataObj = {
    buttonText: string,
    buttonType: string,
    header: string,
    id: number,
    key: string,
    price: PricingTablesCardPriceObj,
    text: string
}

type PricingTablesCardPriceObj = {
    currency: string,
    option: string,
    value: number
}
