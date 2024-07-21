export default defineAppConfig({
    ui: {
        strategy: 'override',
        primary: 'violet',
        divider: {
            border: {
                base: 'flex border-gray-500 dark:border-white-900',
            },
        },
        card: {
            shadow: '',
            ring: '',
        },
        formGroup:  {
            description: 'text-purple-500 dark:text-gray-400',
            hint: 'text-gray-500 dark:text-gray-400',
            help: 'mt-2 text-gray-500 dark:text-gray-40',
        }
    }
})