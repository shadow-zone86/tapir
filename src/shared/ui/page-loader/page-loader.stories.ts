import type { Meta, StoryObj } from '@storybook/vue3'
import PageLoader from './page-loader.vue'

const meta: Meta<typeof PageLoader> = {
  title: 'Shared/UI/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Показывать лоадер',
    },
    text: {
      control: 'text',
      description: 'Текст под спиннером',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    loading: true,
    text: 'Загрузка',
  },
}

export const CustomText: Story = {
  args: {
    loading: true,
    text: 'Пожалуйста, подождите...',
  },
}

export const Loaded: Story = {
  args: {
    loading: false,
    text: 'Загрузка',
  },
}
