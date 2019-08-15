import Vue, { VNode } from 'vue';
import { DirectiveBinding } from 'vue/types/options';

import addOutsideClick from '@/utils/addOutsideClick';

const OutsideClick = {
  acceptStatement: true,
  bind(element: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const vm = vnode.context as any;
    vm.removeOutsideClick = addOutsideClick(element, binding.value);
  },
  unbind(_: any, __: any, vnode: VNode) {
    const vm = vnode.context as any;
    if (vm.removeOutsideClick) {
      vm.removeOutsideClick();
    }
  }
};

export default OutsideClick;

Vue.directive('skf-outside-click', OutsideClick);
