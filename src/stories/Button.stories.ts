// src/stories/Button.stories.ts
import type { Meta, StoryFn } from '@storybook/vue3';
import { VBtn } from 'vuetify/components';

export default {
  title: 'Vuetify/Button',
  component: VBtn,
  argTypes: {
    color: {
      control: 'color',
      description: 'The color of the button',
      defaultValue: 'primary'
    },
    size: {
      control: 'radio',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description: 'The size of the button',
      defaultValue: 'default'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button'
    },
    variant: {
      control: 'radio',
      options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain']
    }
  }
} as Meta;

const Template: StoryFn = (args) => ({
  components: { VBtn },
  setup() {
    return { args };
  },
  template: '<v-btn v-bind="args">Button</v-btn>'
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  disabled: true,
  size: 'large',
  variant: 'flat'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   color: "secondary",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   disabled: true,
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
// };
