import React from 'react'

export function WebPageSchema({ name, description, uri = '', type='WebPage' }) {
    const schema = {
        '@context': "https://schema.org",
        '@type': type,
        name: name,
        description: description,
        url: `https://andrewkepson.com/${uri}`
    }

    return (
        <script type="application/ld+json">
            {JSON.stringify(schema)}
        </script>
    )
}