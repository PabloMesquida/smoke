uniform float uTime;
uniform sampler2D uPerlinTexture;

varying vec2 vUv;

void main(){
    vec2 smokevUv = vUv;
    smokevUv.x *= 0.5;
    smokevUv.y *= 0.3;
    smokevUv.y -=  uTime * 0.03;

    float smoke = texture(uPerlinTexture, smokevUv).r;

    smoke = smoothstep(0.4, 1.0, smoke);
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.4, vUv.y);

    float level1 = step(0.1, smoke);
    float level2 = step(0.4, smoke);
    float combined = mix(level1, level2, 0.5);

    gl_FragColor = vec4(0.9, 0.6, 0.5, combined * 0.25);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}