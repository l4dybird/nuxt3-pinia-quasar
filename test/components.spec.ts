import { mount } from "@vue/test-utils";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-vitest";
import * as components from "quasar";
import Button from "../components/Button.vue";

installQuasarPlugin({
  components,
});

describe("ui component render test", () => {
  it("button component", () => {
    const wapper = mount(Button, {
      props: {
        label: "label",
      },
    });
    expect(wapper.text()).toBe("label");
  });
});
