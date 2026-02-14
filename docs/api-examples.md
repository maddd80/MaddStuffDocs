# API Examples

## Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Site Data

<pre>{{ site }}</pre>

## Page Data

<pre>{{ page }}</pre>

## Theme Data

<pre>{{ theme }}</pre>
