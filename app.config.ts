export default defineAppConfig({

    ui: {
        strategy: 'override',
        primary: 'violet',
        gray: 'neutral',
        divider: {
            border: {
                base: 'flex border-gray-500 dark:border-white-900',
            },
        },
        card: {
            shadow: '',
            ring: '',
        },
        button: {
            variant: {
                outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            }
        }
    }
})