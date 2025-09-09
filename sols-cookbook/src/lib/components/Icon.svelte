<script>
  let { name, size = 24, color = 'currentColor', fill = 'none' } = $props();

  const icons = {
    'chevron-left': 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    'chevron-right': 'M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z',
    'arrow-left': 'M19 12H5m7-7l-7 7 7 7',
    'arrow-right': 'M5 12h14m-7-7l7 7-7 7',
    heart:
      'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  };

  let path = $derived(icons[name] || '');
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  {fill}
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d={path} />
</svg>
