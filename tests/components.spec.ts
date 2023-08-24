import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-vitest";
import * as components from "quasar";
import Button from "~/components/Button.vue";

installQuasarPlugin({
  components,
});

describe("sample testing", () => {
  it("props bind", () => {
    const wrapper = mount(Button, {
      props: {
        label: "label",
      },
    });
    expect(wrapper.text()).toBe("label");
  });

  it("two-way-binding", async () => {
    let wrapper: VueWrapper<components.QInput>;
    wrapper = shallowMount(components.QInput, {
      props: {
        modelValue: "",
        "onUpdate:modelValue": async (modelValue: string | number | null) =>
          await wrapper.setProps({ modelValue }),
      },
    });
    await wrapper.find("[type='text']").setValue("two-way-binding");
    expect(wrapper.vm.$props.modelValue).toBe("two-way-binding");
  });
});
