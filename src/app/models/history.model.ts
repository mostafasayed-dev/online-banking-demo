export interface History {
    _id: string,
    reference_number: string,
    transaction: string,
    from_account: string,
    to_account: string,
    from_amount: number,
    to_amount: number,
    from_account_type: string,
    to_account_type: string,
    from_currency: string,
    to_currency: string,
    createdAt: string,
    updatedAt: string
}