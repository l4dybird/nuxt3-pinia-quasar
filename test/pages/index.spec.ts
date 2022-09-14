import { mount } from "@vue/test-utils";
import { setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { Quasar } from "quasar";
import Page from "../../pages/index.vue";

const pinia = createTestingPinia();

setActivePinia(pinia);

describe("PageComponent", async () => {
  it("renders a counter", async () => {
    const wrapper = mount(Page, {
      global: {
        plugins: [pinia, Quasar],
      },
    });

    expect(wrapper.html()).contains("counter:0");
  });
});
