export const state = () => ({
    pagesData: {},
    sales: [],
    fields: null
})
export const mutations = {
    addPageData(state, payload) {
        state.pagesData = {...state.pagesData, ...payload}
    },
    setSales(state, payload) {
        state.sales = payload
    },
    setFields(state, payload) {
        state.fields = payload
    }
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
    async getSales({commit}) {
        const sales = await this.$axios.$get("/api/delivery/sales")

        commit("setSales", sales)
    },

    async getFields({commit}) {
        const data = await this.$axios.$get("/api/delivery/sales/form")

        commit("setFields", data.fields)
    },

    addSalesItem(_, data) {   
      return this.$axios.$post("/api/delivery/sales", data)
    }
}