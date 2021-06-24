import * as React from 'react';
import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogCommentsSectionProps = {
    page: string,
    cardIdFromPathname: number,
    commentsIconClicked: boolean,
    data: Data,
    fakeData: Array<GeneralTypes.BlogListStandardPageItem & CardId>,
    inputFormFieldsArray: GeneralTypes.InputForm,
    triggerCommentReplyButtonVal: boolean,
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    initInputForm: (obj: GeneralTypes.InputForm) => {obj: GeneralTypes.InputForm},
    postReply: (id: number, info: PostInfo) => void,
    postReplyFakeData: (obj: GeneralTypes.BlogListStandardPageItem & CardId) => void,
    replyComment: () => void,
    setCommentsButtonClickedState: (val: boolean) => {val: boolean},
    setInputFiledValueAndCheckValidation: (obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string) => {obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string},
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

type PostInfo = {
    id: string,
    pathOfIds: Array<number>,
    comment: string,
    fullName: string,
    email: string,
    date: string,
    website: string
}
