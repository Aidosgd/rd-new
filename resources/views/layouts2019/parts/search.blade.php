<?php
    $searchLang = isset($lang) ? $lang : app()->getLocale();
    $searchCity = isset($city) ? $city : 'almaty';
    $searchQuery = isset($query) ? $query : '';
?>
<div class="site-search" style="max-width: 640px; margin: 0 auto 30px;">
    <form action="/{{ $searchLang }}/search" method="get">
        <input type="hidden" name="city" value="{{ $searchCity }}">
        <div style="display: flex; border: 1px solid #3B2D25; border-radius: 4px; overflow: hidden;">
            <input type="text" name="q" value="{{ $searchQuery }}"
                   placeholder="{{ trans('home.search_placeholder') }}"
                   style="flex: 1 1 auto; width: 100%; border: 0; padding: 12px 16px; font-size: 16px; color: #3B2D25; background: #fff; outline: none;">
            <button type="submit"
                    style="flex: 0 0 auto; display: inline-flex; align-items: center; gap: 8px; border: 0; background: #3B2D25; color: #fff; padding: 12px 28px; font-size: 16px; cursor: pointer; white-space: nowrap;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex: 0 0 auto;">
                    <circle cx="11" cy="11" r="7"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                {{ trans('home.search_button') }}
            </button>
        </div>
    </form>
</div>
