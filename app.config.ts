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
            ring: 'ring-1 ring-gray-500 dark:ring-gray-900',
        }
    }
})