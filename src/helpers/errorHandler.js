export const errorHandler = (e) => {
    if (!!e?.data?.message) return e.data.message

    return 'Something went wrong'
}