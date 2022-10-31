<!-- Modal -->
<div class="modal fade" id="cityModal" tabindex="-1" role="dialog" aria-labelledby="cityModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title" id="cityModalLabel">{{ trans('modals.city_title') }}</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" style="padding: 40px 0">
                <div class="locale position-relative cities-block" style="text-align: center">
                    <ul>
                        <li class="{{ $city === 'almaty' ? 'active' : '' }}">
                            <a data-val="almaty" href="{{url()->current()}}">Алматы</a>
                        </li>
                        <li class="{{ $city === 'nur-sultan' ? 'active' : '' }}">
                            <a data-val="nur-sultan" href="{{url()->current()}}?city=nur-sultan">Астана</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    var cityModal = localStorage.getItem('cityModal');
    if(!cityModal){
        $('#cityModal').modal('show');
        localStorage.setItem('cityModal', 1);
    }
</script>