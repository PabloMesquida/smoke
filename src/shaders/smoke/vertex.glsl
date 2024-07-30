uniform float uTime;
uniform sampler2D uPerlinTexture;
uniform float uRotate;

varying vec2 vUv;

#include  ../includes/rotate2D.glsl

void main()
{
    vec3 newPosition = position;

    float twistPerlin = texture(uPerlinTexture, vec2(0.5, uv.y * 0.15 - uTime * 0.0025)).r;
    float angle = twistPerlin * 10.0 + uRotate;
    newPosition.xz = rotate2D(newPosition.xz, angle);

    vec2 windOffset = vec2(texture(uPerlinTexture, vec2(0.25,uTime * 0.01)).r - 0.5, texture(uPerlinTexture, vec2(0.75,uTime * 0.01)).r - 0.5);
    windOffset *= pow(uv.y, 2.0) * 3.0 + uRotate;
    newPosition.xz += windOffset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    vUv = uv;
}