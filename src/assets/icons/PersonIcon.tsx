import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={props?.width || 512}
    height={props?.height || 512}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="#fff"
      d="M111 504s-10.302-90.311 78.44-100.387h37.973V386.12s26.712 11.473 53.76 1.28l.854 16.213H326.4S403.673 411.328 399 504H111Z"
    />
    <Path fill="#3b434f" d="m243 451 12-13 13 13-7 7 11 45h-34l12-45-7-7Z" />
    <Path
      fill="#3b434f"
      d="M398.262 505.587H108.228l1.377-23.53c2.69-45.942 38.887-81.004 80.31-81.004h37.498v4.694H192.43c-39.924 0-74.81 33.748-77.403 77.97l-.956 16.323h283.44l-.53-16.323c-2.593-44.222-37.48-77.97-77.403-77.97H284.16v-4.694h37.68c41.423 0 77.62 35.062 80.31 81.004l1.377 23.53h-5.265Z"
    />
    <Path
      fill="#3b434f"
      d="M230.4 384.146v26.315c0 13.656 11.08 24.726 24.747 24.726s24.746-11.07 24.746-24.726V384.69a83.426 83.426 0 0 0 4.267-1.425v27.376c0 16.149-13.085 29.24-29.227 29.24-16.141 0-29.226-13.091-29.226-29.24v-28.186a83.846 83.846 0 0 0 4.693 1.692zm101.32 73.343-12.085 25.207a2.56 2.56 0 1 1-4.617-2.213l11.672-24.345-9.12-15.797a2.56 2.56 0 1 1 4.434-2.56l9.813 16.998a2.558 2.558 0 0 1-.097 2.71zm-153.358.025 12.15 25.284a2.576 2.576 0 0 0 3.434 1.206 2.565 2.565 0 0 0 1.208-3.426l-11.734-24.42 9.169-15.845a2.565 2.565 0 0 0-.942-3.508 2.577 2.577 0 0 0-3.516.94l-9.866 17.05a2.56 2.56 0 0 0 .097 2.719z"
    />
    <Path
      fill="#3b434f"
      d="M225.707 400.2h4.693v103.68h-4.693V400.2zm54.186.853h4.694v103.68h-4.694v-103.68z"
    />
    <Path
      fill="#3b434f"
      fillRule="evenodd"
      d="m270.7 503.69-12.095-45.136 2.515-.754 1.667-1.772 12.792 47.738-4.88-.076Zm-34.115-.533 12.626-46.91.816.7 2.56 1.706.844.085-11.977 44.495-4.869-.076Z"
    />
    <Path
      fill="#3b434f"
      fillRule="evenodd"
      d="m284.146 463.788-3.32 3.318-12.912-12.913c-2.492 3.958-6.892 6.594-11.914 6.594-5.225 0-9.776-2.853-12.205-7.08l-13.48 13.48-3.327-3.328 26.539-26.539 2.075-1.924 2.076 1.924 26.468 26.468Zm-37.74-12.692a10.445 10.445 0 0 0 9.38 5.85c4.028 0 7.515-2.283 9.26-5.62l-9.435-9.435-9.205 9.205Z"
    />
    <Path
      fill="#fff"
      d="M256.007 125.427c54.03 0 95.13 47.383 92.931 101.603l-2.984 73.58c-8.455 49.955-42.895 86.02-89.57 91.057-45.53-4.785-80.645-41.115-90.324-91.057l-2.984-73.58c-2.2-54.22 38.902-101.603 92.931-101.603Z"
    />
    <Path
      fill="#3b434f"
      fillRule="evenodd"
      d="m354.907 223.91-3.177 76.88c-8.998 52.197-45.653 89.88-95.328 95.143-48.457-4.999-85.83-42.96-96.132-95.143l-3.176-76.88c-2.34-56.653 41.403-106.163 98.906-106.163 57.504 0 101.247 49.51 98.907 106.162Zm-98.9-100.19c-54.03 0-95.13 47.384-92.931 101.603l2.984 73.58c9.68 49.942 44.795 86.272 90.324 91.057 46.675-5.036 81.115-41.102 89.57-91.057l2.984-73.58c2.2-54.22-38.902-101.603-92.931-101.603Z"
    />
    <Path
      fill="#3b434f"
      d="M302.08 327.326c-7.755 6.734-25.272 13.14-45.653 13.14-20.382 0-37.898-6.406-45.654-13.14 0 0-.793-2.183.371-3.348 1.186-1.185 3.043-.927 3.043-.927 7.747 6.738 21.85 12.296 42.24 12.296 20.389 0 34.493-5.558 42.24-12.296 0 0 1.895-.704 2.815.216 1.773 1.773.598 4.059.598 4.059zm-59.733 23.38h27.306v4.267h-27.306v-4.266z"
    />
    <Path
      fill="#fff"
      d="M157.807 233.313c-.012 0-1.047-.826-3.003-1.442a14.109 14.109 0 0 0-3.578-.623 14.539 14.539 0 0 0-2.181.067c-.758.08-1.54.226-2.327.452-3.15.906-6.365 3.108-8.253 7.652-.948 2.272-1.573 5.13-1.738 8.707a43.67 43.67 0 0 0-.036 2.819c.018.986.067 2.018.149 3.1a76.36 76.36 0 0 0 .898 7.095c-.01-.003-.41 7.77 2.368 16.7 2.613 8.733 8.886 19.46 20.467 22.524-1.332-22.179-1.373-44.774-2.766-67.05Z"
    />
    <Path
      fill="#3b434f"
      d="M159.128 234.207s-20.177-6.251-19.466 14.491c0 0 3.003 30.077 4.308 32.85 0 0 7.924 17.511 21 18.287 12.782.759 0 0 0 0l.16 5.645s-22.985-2.947-27.424-29.435l-3.504-24.062s-2.72-31.845 23.67-23.748c25.708 7.888 0 0 0 0l1.256 5.972"
    />
    <Path
      fill="#3b434f"
      d="M152.468 275.995s-1.129.853-2.099.853c-.97 0-2.085-.853-2.085-.853l-2.082-20.983s2.872-10.333 15.063-4.873l.289 6s-10.696-3.793-10.475.93c.213 4.547 1.39 18.926 1.39 18.926Z"
    />
    <Path
      fill="#fff"
      d="M353.813 233.362c.012 0 1.053-.826 3.017-1.441.982-.307 2.202-.56 3.593-.622a14.683 14.683 0 0 1 2.191.066c.76.08 1.546.226 2.337.452 3.165.905 6.393 3.106 8.29 7.647.951 2.27 1.58 5.127 1.745 8.7.042.894.055 1.833.036 2.818a54.18 54.18 0 0 1-.15 3.098 75.937 75.937 0 0 1-.901 7.09c.01-.003.412 7.765-2.38 16.69-2.623 8.726-8.923 19.445-20.556 22.508 1.338-22.164 1.38-44.744 2.778-67.006Z"
    />
    <Path
      fill="#3b434f"
      d="M352.483 234.256s20.264-6.248 19.551 14.48c0 0-3.017 30.057-4.327 32.828 0 0-7.959 17.5-21.093 18.275-12.837.758 0 0 0 0l-.16 5.641s23.086-2.945 27.545-29.415l3.519-24.046s2.732-31.823-23.773-23.732c-25.822 7.883 0 0 0 0l-1.262 5.969"
    />
    <Path
      fill="#3b434f"
      d="M359.171 276.015s1.134.853 2.109.853c.974 0 2.094-.853 2.094-.853l2.092-20.969s-2.886-10.326-15.13-4.869l-.29 5.996s10.743-3.79 10.52.93c-.213 4.543-1.395 18.912-1.395 18.912Z"
    />
    <Path
      fill="#3b434f"
      fillRule="evenodd"
      d="M263.893 274.333h1.494c3.087 4.193 4.343 10.637 5.973 16.214.505 1.728.015 4.751-.427 5.973-1.617 4.476-6.697 4.395-10.88 6.4-1.123.538-1.958 1.468-3.413 1.707-.948-.836-2.093-1-2.56-2.347-1.152-1.587.333-2.578 1.493-3.2 2.107-1.13 8.608-2.243 9.387-4.267.963-1.095.323-4.39 0-5.546-.827-2.962-1.223-5.435-2.347-8.107-.746-1.775-2.056-3.646-1.28-5.76.644-.276 2.034-.59 2.56-1.067Z"
    />
    <Path
      fill="#3b434f"
      d="M204.8 241.48h5.973a5.973 5.973 0 1 1 0 11.947H204.8a5.973 5.973 0 1 1 0-11.947zm97.28 0h5.973a5.973 5.973 0 1 1 0 11.947h-5.973a5.973 5.973 0 1 1 0-11.947z"
    />
    <Path
      fill="#f5f3ef"
      d="M208.64 269.64c8.247 0 14.933.473 14.933 9.813 0 9.634-6.686 9.814-14.933 9.814s-14.933-1.755-14.933-9.814c0-9.413 6.686-9.813 14.933-9.813zm98.987 0c8.247 0 14.933.473 14.933 9.813 0 9.634-6.686 9.814-14.933 9.814-8.248 0-14.934-1.755-14.934-9.814 0-9.413 6.686-9.813 14.934-9.813z"
    />
    <Path
      fill="#3b434f"
      d="M283.327 226.44s25.545-14.604 43.793 1.487l4.827.748s-6.183-22.497-51.2-7.869L282 225m1 0s25.987-14.926 43.12 3.927l8.827-.252s-11.009-24.032-56.2-8.869L283 226m-54.562.526s-25.459-14.476-43.646 1.472l-4.811.742s6.162-22.298 51.029-7.8l-1.25 4.157m-.996 0s-25.9-14.794-42.976 3.893l-8.797-.25s10.972-23.82 56.012-8.79l-4.239 6.139"
    />
    <Path
      fill="#3b434f"
      d="M165.637 217.564s28.093-14.243 24.988-63.222c0 0 44.94 49.241 153.268 34.231l5.12 46.08s63.682-118-50.346-145.066c-111.592-26.489-112.878 43.396-112.878 43.396s-34.222-5.114-37.08 28.194c-2.857 33.307 7.451 68.356 7.451 68.356l8.533 6.827.944-18.796Z"
    />
  </Svg>
)

const PersonIcon = memo(SvgComponent)
export default PersonIcon
