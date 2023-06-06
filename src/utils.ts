export function logWithTimestamp(...message) {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}]`, ...message)
}

export async function waitOneMillisecondAsync() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1)
    })
}
