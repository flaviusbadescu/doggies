import { useDoggieStore } from "@/stores/doggieStore";
import DoggieViewVue from "@/views/explorer/doggie-details/DoggieView.vue";
import DoggieSearchVue from "@/views/explorer/DoggieSearch.vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Doggies", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(DoggieSearchVue);
    expect(wrapper.findAll("div").filter((n) => n.text().match("Tocken ID")));
  });

  it("test store", () => {
    const store = useDoggieStore();
    expect(store.doggie).toEqual(null);
  });

  it("should change store", () => {
    const store = useDoggieStore();

    vi.spyOn(store, "fetchDoggieById");
    store.fetchDoggieById(999);
    expect(store.fetchDoggieById).toHaveBeenCalled();
  });

  it("should get data", () => {
    const store = useDoggieStore();
    store.doggie = {
      name: "test",
      animation_url: "www.animurl.com",
      attributes: [{ trait_type: "test", value: "test" }],
      description: "test description",
      external_url: "www.externalurl.com",
      iframe_url: "www.iframeurl.com",
      image_url: "www.imageurl.com",
      owner: "test owner",
    };
    const wrapper = mount(DoggieViewVue);
    expect(wrapper.findAll("div").filter((n) => n.text().match("Description")));
  });
});
