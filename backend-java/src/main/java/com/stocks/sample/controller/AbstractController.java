package com.stocks.sample.controller;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.util.Map;

public abstract class AbstractController {
    /**
     * @param encoding
     * @param result
     * @return
     * @throws IOException
     */
    protected Object getFormattedRepresentation(String encoding, String result) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Object node = null;

        if (encoding.equalsIgnoreCase(MediaType.APPLICATION_XML_VALUE)) {
            node = result;
        } else if (encoding.equalsIgnoreCase(MediaType.APPLICATION_JSON_VALUE)) {
            node = mapper.readValue(result, Map.class);
        }

        return node;
    }

    /**
     * @param encoding
     * @return
     */
    protected HttpHeaders getHttpHeadersForEncoding(String encoding) {
        MediaType mediaType = MediaType.APPLICATION_JSON;

        if (encoding.equalsIgnoreCase(MediaType.APPLICATION_XML_VALUE)) {
            mediaType = MediaType.APPLICATION_XML;
        } else if (encoding.equalsIgnoreCase(MediaType.APPLICATION_JSON_VALUE)) {
            mediaType = MediaType.APPLICATION_JSON;
        }

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(mediaType);
        return httpHeaders;
    }
}
