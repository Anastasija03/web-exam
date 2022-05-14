export const state = () => ({
    pagesData: {},
})
export const mutations = {
    addPageData(state, payload) {
        state.pagesData = {...state.pagesData, ...payload}
    },
}

export const actions = {
    async getPagesData({commit}) {
        const home = await this.$axios.$get("/api/delivery/home_page")
        const about = await this.$axios.$get("/api/delivery/about_page")
        const leftWidget = await this.$axios.$get("/api/delivery/left_widget")

        commit("addPageData", {
            home,
            about,
            leftWidget
        })
    },
}