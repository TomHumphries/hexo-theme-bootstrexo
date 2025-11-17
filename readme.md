# Bootstrexo
A Bootstrap 5 powered theme for [Hexo](https://hexo.io/).  

## Install

Execute the following command and modify `theme` in `_config.yml` to `bootstrexo`.

```
git clone --depth 1 https://github.com/TomHumphries/hexo-theme-bootstrexo themes/bootstrexo
```

``` diff
_config.yml
- theme: some-theme
+ theme: bootstrexo
```


## Config

Default config:

``` yaml
menu:
  Archives: /archives

widgets:
- category
- tag

default_thumbnail: /images/default-thumbnail.svg

github:
linkedin:
medium:

```

- **menu** - Main navigation menu
- **widget** - Widgets displaying in sidebar
- **default_thumbnail** - Default thumbnail image for posts without a specified thumbnail

## Features

### Post Thumnails
Each post has a thumbnail image.  
This is set using the `thumbnail` front-matter variable.  
If not set, a default thumbnail image will be used.  
The default thumbnail can be configured in `_config.yml` using the `default_thumbnail` variable. By default, it is set to `/images/default-thumbnail.svg`.
```
---
title: Post with a thumbnail
thumbnail: https://i.postimg.cc/c49xRqRP/1.jpg
---
```

### Gallery Post

Using a Bootstrap 5 [carousel](https://getbootstrap.com/docs/5.3/components/carousel/).  

```
---
title: Gallery Post
photos:
- https://i.postimg.cc/c49xRqRP/1.jpg
- https://i.postimg.cc/288jLjZ4/2.jpg
- https://i.postimg.cc/T2cYP5pd/3.jpg
---
```

## Acknowledgements

The [light hexo theme](https://github.com/hexojs/hexo-theme-light) was used as a reference while building this theme.  
Languages were taken from [light hexo theme](https://github.com/hexojs/hexo-theme-light).  
[Bootstrap 5](https://getbootstrap.com/) is used for layout and components.  
Icons including the default thumbnail image are from [Bootstrap Icons](https://icons.getbootstrap.com/).  
