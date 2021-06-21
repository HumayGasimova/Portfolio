export type AccordionItemProps = {
    hoverEffect: boolean | null,
    iconType: string,
    obj: AccordionItemObj,
    style: string,
    activateAccordionItem: (val: string, id: number) => {val: string, id: number},
    setIsHoverAccordionItem: (val: string, id: number) => {val: string, id: number} | null

}

type AccordionItemObj= {
    active: string,
    header: string,
    id: number,
    isHover: string,
    key: string,
    text: string
}
