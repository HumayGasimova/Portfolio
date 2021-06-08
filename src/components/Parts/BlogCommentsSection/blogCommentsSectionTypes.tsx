import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogCommentsSectionProps = {
    page: string,
    cardIdFromPathname: number,
    commentsIconClicked: boolean,
    data: Data,
    fakeData: Array<GeneralTypes.BlogListStandardPageItem & CardId>,
    inputFormFieldsArray: inputFormFieldsArrayObj,
    triggerCommentReplyButtonVal: boolean,
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    initInputForm: (obj: GeneralTypes.InputForm) => {obj: GeneralTypes.InputForm},
    postReply: (id: string, info: PostInfo) => void,
    postReplyFakeData: (obj: GeneralTypes.BlogListStandardPageItem & CardId) => void,
    replyComment: () => void,
    setCommentsButtonClickedState: (val: boolean) => {val: boolean},
    setInputFiledValueAndCheckValidation: (obj: GeneralTypes.InputForm, e: MouseEvent, id: string, formName?: string) => {obj: GeneralTypes.InputForm, e: MouseEvent, id: string, formName?: string},
    triggerCommentReplyButton: () => void
  
}

export type Data = {
    item: GeneralTypes.BlogListStandardPageItem & CardId, 
    loading: boolean, 
    error: any
}

type CardId = {
    cardId: string
}

type inputFormFieldsArrayObj = {

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
