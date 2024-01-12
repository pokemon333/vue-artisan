# Virnus

Virnus is a powerful command-line tool for quickly generating Vue.js components and pages with various options. Save time and maintain consistency in your Vue.js projects by using Virnus to scaffold out your files effortlessly.

## Installation

To install Virnus globally, use the following npm command:

```  
npm install @virnus/vue-artisan
```

## Usage

### Create a Vue Component

To generate a Vue component, use the following command:

```  
virnus make:component -ocMdm <ComponentName> 
```

### Create a Vue Page

To generate a Vue page, use the following command:

```  
virnus make:page -ocMdm <PageName> 
```


- `<ComponentName>`: Specify the name of the component you want to create.
- `<PageName>`: Specify the name of the page you want to create.
  
Options:

- `o`: vue option
- `c`: vue composition ( setup script )
- `M`: Include this option to automatically generate a `mounted` lifecycle hook.
- `d`: Include this option to automatically generate a `data` property (reactive state).
- `m`: Include this option to automatically generate methods in your component.

# Example :

```
virnus make:page   -omMd   VueOption
```
This will create a vue file with option , mounted, mehods , data


```
virnus make:componet  -cM   VueComposition
```

This will create a vue file with composition api with setup script with onMounted
