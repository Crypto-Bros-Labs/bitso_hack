package com.cb_labs.cb_flow_connect.web.dto.response;

import java.util.UUID;

public record LiquidityProviderResponse(
        UUID uuid,
        String name
) {
}
