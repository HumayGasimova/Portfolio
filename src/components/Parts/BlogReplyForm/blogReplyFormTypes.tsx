
import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogReplyFormProps = {
    inputFormFieldsArray: GeneralTypes.InputForm,
    pathOfIdsToComment: Array<number>,
    fakeData: Array<GeneralTypes.BlogListStandardPageItem & CardId>,
    cardIdFromPathname: number,
    inputFieldNameBold: boolean,
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    initInputForm: (obj: GeneralTypes.InputForm) => {obj: GeneralTypes.InputForm},
    postReply: (id: number, info: PostInfo) => void,
    postReplyFakeData: (obj: GeneralTypes.BlogListStandardPageItem & CardId) => void,
    replyComment: () => void,
    setInputFiledValueAndCheckValidation: (obj: GeneralTypes.InputForm, e: MouseEvent, id: string, formName?: string) => {obj: GeneralTypes.InputForm, e: MouseEvent, id: string, formName?: string},
}

type CardId = {
    cardId: string
}

type PostInfo = {
    id: string,
    pathOfIds: Array<number>,
    comment: string,
    fullName: string,
    email: string,
    date: string,
    website: string
}