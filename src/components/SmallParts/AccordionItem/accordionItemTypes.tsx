import * as GeneralTypes from '../../../reducers/generalTypes';

export type AccordionItemProps = {
    hoverEffect?: boolean,
    iconType: string,
    obj: GeneralTypes.AccordionItemObj,
    option?: string,
    style: string,
    activateAccordionItem: (val: string, id: number, opt?: string) => {val: string, id: number, opt?: string},
    setIsHoverAccordionItem?: (val: string, id: number) => {val: string, id: number}
}

