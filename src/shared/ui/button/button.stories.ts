import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './button.vue'

const meta: Meta<typeof Button> = {
  title: 'Shared/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    to: { control: 'text' },
    href: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Кнопка</Button>',
  }),
}

export const Outline: Story = {
  args: { variant: 'outline' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Кнопка</Button>',
  }),
}

export const AsLink: Story = {
  args: { variant: 'primary', to: '/catalog' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">В каталог</Button>',
  }),
}

export const AsAnchor: Story = {
  args: { variant: 'outline', href: 'https://example.com' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Ссылка</Button>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <div>
          <Button variant="primary" to="/catalog">В каталог</Button>
        </div>
        <div>
          <Button variant="outline">С обработчиком</Button>
        </div>
      </div>
    `,
  }),
}
