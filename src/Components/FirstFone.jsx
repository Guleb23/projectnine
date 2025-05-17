import React from 'react'

const FirstFone = ({ children, id }) => {
    return (
        <section id={id} className='bg-black w-screen h-screen relative overflow-hidden overflow-x-hidden'>
            <img className='absolute w-full h-screen select-none pointer-events-none -translate-x-1/2 left-1/2  ' src='/Hero/morp.png' />
            <img className='hidden lg:block absolute w-full select-none pointer-events-none' src='/Hero/blur.png' />
            <img className='block lg:hidden absolute w-full select-none pointer-events-none -translate-x-1/2 left-1/2 min-w-[860px] min-h-[276px] top-[30%]' src='/Hero/blur.png' />
            <div
                className="block lg:hidden absolute top-16 left-0 h-auto max-h-[400px] select-none pointer-events-none z-0 lastLast"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    maskRepeat: 'no-repeat',
                    maskSize: '100% 100%',
                }}
            >
                <pre>
                    <code>
                        {`static bool init(CURL conn, char *url)
{
    CURLcode code;
    conn = curl_easy_init();
    if (conn == NULL) {
        fprintf(stderr, "Failed to create CURL connection\\n");
        exit(EXIT_FAILURE);
    }
    code = curl_easy_setopt(conn, CURLOPT_ERRORBUFFER, errorBuffer);
    if (code != CURLE_OK) {
        fprintf(stderr, "Failed to set error buffer [%d]\\n", code);
        return false;
    }
    code = curl_easy_setopt(conn, CURLOPT_URL, url);
    if (code != CURLE_OK) {
        fprintf(stderr, "Failed to set URL [%s]\\n", errorBuffer);
        return false;
    }
    code = curl_easy_setopt(conn, CURLOPT_FOLLOWLOCATION, 1L);
    if (code != CURLE_OK) {
        fprintf(stderr, "Failed to set redirect option [%s]\\n", errorBuffer);
        return false;
    }
    return true;
}`}
                    </code>
                </pre>
            </div>
            {children}
        </section>
    )
}

export default FirstFone
