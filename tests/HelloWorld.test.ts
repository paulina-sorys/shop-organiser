import { describe, it, expect } from 'vitest';
import HelloWorld from '../src/components/HelloWorld.vue';
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
    it("renders properly", () => {
        const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
        expect(wrapper.text()).toContain("Hello Vitest");
    });

    it("increments count by 1 when button is clicked", async () => {
        const wrapper = mount(HelloWorld);
        await wrapper.find('button').trigger('click');
        expect(wrapper.text()).toContain('count is 1');
    });
});