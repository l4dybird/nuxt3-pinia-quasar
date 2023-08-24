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

  test.each(["two-way-binding", 1, null])("two-way-binding", async (value) => {
    let wrapper: VueWrapper<components.QInput>;
    wrapper = shallowMount(components.QInput, {
      props: {
        modelValue: "",
        "onUpdate:modelValue": async (modelValue: string | number | null) =>
          await wrapper.setProps({ modelValue }),
      },
    });

    await wrapper.find("[type='text']").setValue(value);
    expect(wrapper.vm.$props.modelValue).toBe(String(value));
  });

  test.each(["two-way-binding", 1, null])(
    "update:modelValue",
    async (value) => {
      let wrapper: VueWrapper<components.QInput>;
      wrapper = shallowMount(components.QInput, {
        props: {
          modelValue: "",
          "onUpdate:modelValue": async (modelValue: string | number | null) =>
            await wrapper.setProps({ modelValue }),
        },
      });

      await wrapper.vm.$emit("update:modelValue", value);
      expect(wrapper.vm.$props.modelValue).toBe(value);
    }
  );
});
